export default function Header() {
  return (
    <header style={{ backgroundColor: '#000000', position: 'fixed', width: '100%', top: 0, zIndex: 50 }}>
      <div style={{ width: '100%', padding: '0 16px' }}>
        {/* Top row with navigation menu */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '48px', width: '100%', paddingTop: '68px', paddingBottom: '28px' }}>
          {/* Top border line */}
          <div style={{ position: 'absolute', top: '40px', left: 0, right: 0, height: '2px', backgroundColor: '#ffffff' }}></div>
          {/* Bottom border line */}
          <div style={{ position: 'absolute', bottom: '4px', left: 0, right: 0, height: '2px', backgroundColor: '#ffffff' }}></div>
          {/* Navigation menu - centered */}
          <nav style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '96px' }}>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                ABOUT
              </a>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                CONFERENCE
              </a>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                EXHIBITION
              </a>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                PROGRAM
              </a>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                VISITOR
              </a>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                EXHIBITOR
              </a>
              <a href="#" style={{ color: 'white', padding: '8px 8px', fontSize: '26px', fontWeight: '600', fontFamily: 'Pretendard, sans-serif', textDecoration: 'none' }}>
                MEDIA
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}