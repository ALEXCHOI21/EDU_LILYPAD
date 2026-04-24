import React, { useState, useEffect } from 'react';
import './index.css';
import { curriculumData } from './data/curriculum';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  // Simple parser for theory pseudo-markdown
  const renderTheory = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, idx) => {
      // Image support: ![alt](url)
      const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        return (
          <div key={idx} className="theory-img-container">
            <img src={imgMatch[2]} alt={imgMatch[1]} className="theory-img" />
            {imgMatch[1] && <span className="img-caption">{imgMatch[1]}</span>}
          </div>
        );
      }
      
      if (line.startsWith('###')) {
        return <h3 key={idx}>{line.replace('###', '').trim()}</h3>;
      } else if (line.startsWith('-')) {
        return <p key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
          <span style={{ color: 'var(--accent-glow)' }}>•</span> {line.replace('-', '').trim()}
        </p>;
      } else if (line.trim() === '') {
        return <br key={idx} />;
      }
      return <p key={idx}>{line}</p>;
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {content.youtubeId && (
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${content.youtubeId}?autoplay=1`}
              title={content.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="modal-details">
          <div style={{ flex: 2 }}>
            <div className="tag-container">
              {content.tags?.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <h2 className="summary-heading">{content.title}</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.2rem', marginBottom: '2rem' }}>
              {content.description}
            </p>

            {content.theory && (
              <div className="theory-box">
                <h4 style={{ color: 'var(--accent-glow)', marginBottom: '1rem', opacity: 0.8, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Today's Easy Theory
                </h4>
                {renderTheory(content.theory)}
              </div>
            )}
          </div>
          
          <div style={{ flex: 1, paddingLeft: '2rem', borderLeft: '1px solid var(--glass-border)' }}>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--accent-glow)', fontSize: '0.9rem', textTransform: 'uppercase' }}>관련 리소스</h4>
            
            {content.links ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {content.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-card"
                    download={link.url.includes('.') && !link.url.startsWith('http') ? true : undefined}
                  >
                    <h5>{link.title}</h5>
                    <p>{link.summary}</p>
                  </a>
                ))}
              </div>
            ) : content.newsUrl && (
              <a 
                href={content.newsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta"
                style={{ fontSize: '0.8rem', display: 'block', textAlign: 'center', textDecoration: 'none', marginBottom: '1.5rem' }}
              >
                최신 뉴스/사이트 방문
              </a>
            )}

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <button 
                  className="cta" 
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid white', width: '100%', fontSize: '0.8rem' }}
                  onClick={() => window.print()}
                >
                  강의자료 인쇄
                </button>
              </li>
            </ul>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', fontSize: '0.85rem' }}>
              <p style={{ color: 'var(--accent-glow)', fontWeight: 700, marginBottom: '0.5rem' }}>💡 패션 디자이너를 위한 팁</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                기술 용어에 얽매이지 마세요. AI는 단순한 수식이 아니라, 여러분의 감각을 증폭시켜주는 새로운 형태의 '디지털 원단'입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Board States
  const [posts, setPosts] = useState([]);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newPost, setNewPost] = useState({ name: '', content: '', category: '일반' });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwP_bUWYpBLz2_iq01IvMGVGDcGDRwvPM_HXyb994uRyxuRdFM7e9b9c6nc29IVlEvKrA/exec";

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(SCRIPT_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleBoardSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      // no-cors mode won't allow reading the response, so we just assume success
      setNewPost({ name: '', content: '', category: '일반' });
      setIsBoardModalOpen(false);
      // Wait a bit for Google Sheet to sync then re-fetch
      setTimeout(fetchPosts, 2000);
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("전송 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="app-container">
      <nav>
        <div className="logo">LilyPad x AI</div>
        <ul className="nav-links">
          <li><a href="#curriculum">커리큘럼</a></li>
          <li><a href="#project">프로젝트 가이드</a></li>
          <li><a href="#qa">Q&A</a></li>
        </ul>
        <button className="cta">로그인</button>
      </nav>

      <header>
        <img src="/hero.png" alt="LilyPad Fashion" className="hero-image" />
        <div className="glass-card" style={{ maxWidth: '800px' }}>
          <span className="day-badge">New Era of Fashion</span>
          <h1>릴리패드 패션디자인 x AI</h1>
          <p className="subtitle">
            인공지능의 창의성과 웨어러블 테크놀로지의 기술력이 결합된 
            패션 아키텍트 양성 과정에 오신 것을 환영합니다.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#curriculum" className="cta" style={{ textDecoration: 'none' }}>강의 시작하기</a>
            <button className="cta" style={{ background: 'transparent', border: '1px solid white' }}>커리큘럼 보기</button>
          </div>
        </div>
      </header>

      <main id="curriculum">
        <div style={{ textAlign: 'center', padding: '4rem 2rem 0' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)' }}>4-Day Curriculum</h2>
          <p style={{ color: 'var(--text-secondary)' }}>각 항목을 클릭하여 상세 시청각 자료와 실습 가이드를 확인하세요.</p>
        </div>

        <div className="curriculum-grid">
          {curriculumData.map((day) => (
            <div key={day.day} className="glass-card day-card">
              <h3>{day.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {day.description}
              </p>
              <ul className="item-list">
                {day.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    onClick={() => openModal(item)}
                    style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section id="project" className="project-guide">
          <div className="glass-card" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <span className="day-badge">Project Guide</span>
              <h2>Project Approach Guidelines</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: '1.8' }}>
                패션디자인에 기술을 입히는 것은 단순한 장식이 아닙니다. 
                사용자의 경험과 의복의 목적을 고려한 기술적 접근이 필요합니다.
                <br /><br />
                • 소재의 특성과 전도성 실의 흐름 이해<br />
                • LED 배치를 통한 시각적 언어 구축<br />
                • AI를 활용한 패턴 및 컬러 조합 최적화
              </p>
              <button 
                className="cta" 
                style={{ marginTop: '2rem' }}
                onClick={() => openModal({
                    title: "프로젝트 접근 방법 가이드라인",
                    youtubeId: "8fL-2H-a9Is",
                    description: "현장의 디자이너들이 기술을 패션에 녹여내기 위해 거치는 사고 과정과 실무 팁을 공개합니다.",
                    tags: ["Philosophy", "Design Method"]
                })}
              >
                가이드 영상 보기
              </button>
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
              <img 
                src="/ai_concept.png" 
                alt="AI Fashion" 
                style={{ width: '100%', borderRadius: '16px', filter: 'brightness(1.05)' }} 
              />
            </div>
          </div>
        </section>

        <section id="qa" style={{ padding: '4rem 10%' }}>
          <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)' }}>Student Q&A</h2>
          <div className="curriculum-grid" style={{ paddingTop: '2rem' }}>
            <div className="glass-card">
              <h4>기술적 문제</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>아두이노 연결, 코드 에러 등 기술적 질문</p>
            </div>
            <div className="glass-card">
              <h4>디자인 질문</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>의상 디자인과 기술 연계 방법론 질문</p>
            </div>
            <div className="glass-card">
              <h4>기타 문의</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>교육 과정 및 기타 일반 문의</p>
            </div>
          </div>
          
          {/* Real-time Community Board */}
          <div className="board-container" style={{ marginTop: '4rem' }}>
            <div className="board-header">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem' }}>Community Board</h3>
              <button className="cta" onClick={() => setIsBoardModalOpen(true)}>글쓰기</button>
            </div>

            <div className="posts-grid">
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <div key={index} className="glass-card post-card">
                    <div className="post-meta">
                      <span className="post-author">{post.name}</span>
                      <span className="post-date">{new Date(post.timestamp).toLocaleDateString()}</span>
                    </div>
                    <p className="post-content">{post.content}</p>
                    <div className="post-category">{post.category}</div>
                  </div>
                ))
              ) : (
                <div className="qa-placeholder">
                  {isLoading ? "데이터를 불러오는 중입니다..." : "아직 게시글이 없습니다. 첫 번째 주인공이 되어보세요!"}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Board Write Modal */}
        {isBoardModalOpen && (
          <div className="modal-overlay" onClick={() => setIsBoardModalOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
              <button className="close-btn" onClick={() => setIsBoardModalOpen(false)}>×</button>
              <h2 style={{ marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>새 게시글 작성</h2>
              <form onSubmit={handleBoardSubmit}>
                <div className="form-group">
                  <label>이름</label>
                  <input 
                    type="text" 
                    value={newPost.name} 
                    onChange={e => setNewPost({...newPost, name: e.target.value})} 
                    required 
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div className="form-group">
                  <label>카테고리</label>
                  <select 
                    value={newPost.category} 
                    onChange={e => setNewPost({...newPost, category: e.target.value})}
                  >
                    <option value="일반">일반</option>
                    <option value="질문">질문</option>
                    <option value="팁/노하우">팁/노하우</option>
                    <option value="작품공유">작품공유</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>내용</label>
                  <textarea 
                    value={newPost.content} 
                    onChange={e => setNewPost({...newPost, content: e.target.value})} 
                    required 
                    placeholder="내용을 입력하세요"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="cta" style={{ width: '100%', marginTop: '1rem' }} disabled={isSubmitting}>
                  {isSubmitting ? "전송 중..." : "등록하기"}
                </button>
              </form>
            </div>
          </div>
        )}

        <section id="reviews" style={{ padding: '6rem 10%', background: 'rgba(0, 180, 216, 0.02)' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="day-badge">Testimonials</span>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', marginTop: '1rem' }}>Student Reviews</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>릴리패드 패션디자인 x AI 과정을 거쳐간 선배들의 생생한 후기를 확인하세요.</p>
          </div>

          <div className="curriculum-grid" style={{ padding: 0 }}>
            <div className="glass-card review-card">
              <div className="quote-icon">"</div>
              <p className="review-text">패션 디자인과 AI의 결합이 이렇게 흥미로울 줄 몰랐어요! 릴리패드로 직접 옷을 빛나게 하는 경험이 정말 환상적이었습니다.</p>
              <div className="review-author">
                <strong>김민지</strong>
                <span>패션디자인 전공 학생</span>
              </div>
            </div>
            <div className="glass-card review-card">
              <div className="quote-icon">"</div>
              <p className="review-text">제미나이와 NotebookLM을 활용해 기획안을 짜는 법을 배우고 나서 작업 속도가 비약적으로 빨라졌습니다. 혁신적인 수업이에요.</p>
              <div className="review-author">
                <strong>이정훈</strong>
                <span>프리랜서 디자이너</span>
              </div>
            </div>
            <div className="glass-card review-card">
              <div className="quote-icon">"</div>
              <p className="review-text">바느질로 회로를 만드는 릴리패드, 세탁까지 가능하다니 놀랍습니다. 기술을 예술로 승화시키는 법을 제대로 배웠습니다.</p>
              <div className="review-author">
                <strong>박서연</strong>
                <span>디자인 스튜디오 실장</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="https://forms.gle/gTxc4dicnxC5Ly2u5" target="_blank" rel="noopener noreferrer" className="cta">
              나의 수강후기 작성하기
            </a>
          </div>
        </section>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        content={selectedItem} 
      />

      <footer>
        <p>© 2026 ChoiGPT Corp. LilyPad Fashion Design x AI Education Platform.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.5 }}>Hyper-Gap Business Strategy & Architecture</p>
      </footer>
    </div>
  );
};

export default App;
