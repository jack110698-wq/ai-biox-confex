import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <main className="relative min-h-screen flex items-center justify-center" style={{ 
        backgroundColor: '#000000',
        backgroundImage: `url('/images/background.PNG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
        
        {/* Main content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          {/* Main title */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-[7.203rem] sm:text-[8.232rem] md:text-[9.261rem] lg:text-[12.348rem] font-bold text-white leading-tight" style={{ marginTop: '2cm', marginBottom: '-2.5cm' }}>
              AI-BioX
            </h1>
            <h2 className="text-[6.174rem] sm:text-[7.203rem] md:text-[8.232rem] lg:text-[10.29rem] font-bold leading-tight" style={{ color: '#3B82F6' }}>
              ConfEx Platform
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-8 md:mb-12 max-w-4xl mx-auto" style={{ marginTop: '-2cm' }}>
            <p className="text-white/90 font-light" style={{ fontSize: '1.5em', lineHeight: '1.3' }}>
              AI, Bio, Digital Wellness, Contents를 아우르는 혁신 컨펙스<br />
              지식 교류와 미래 인재 육성을 선도하는 글로벌 학술·산업 플랫폼
            </p>
          </div>
          
          {/* Date and location */}
          <div className="mb-12 md:mb-16" style={{ marginTop: '-0.4cm' }}>
            <p className="text-white/90" style={{ fontSize: '2.6em', fontWeight: '900' }}>
              12. 11 (Thu) – 13 (Sat), COEX
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-row justify-center items-center" style={{ gap: '1cm' }}>
            <button className="group text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center min-w-[200px] justify-center" style={{ backgroundColor: '#3B82F6', border: '2px solid #3B82F6', fontWeight: '700', paddingTop: '0.33cm', paddingBottom: '0.33cm', paddingLeft: '1.1cm', paddingRight: '1.1cm', gap: '0.5cm', fontSize: '1.2em' }}>
              <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Pre-Register
            </button>
            <button className="group text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center min-w-[200px] justify-center" style={{ backgroundColor: '#3B82F6', border: '2px solid #3B82F6', fontWeight: '700', paddingTop: '0.33cm', paddingBottom: '0.33cm', paddingLeft: '1.1cm', paddingRight: '1.1cm', gap: '0.5cm', fontSize: '1.2em' }}>
              <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13L10 15L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Brochure Download
            </button>
          </div>
        </div>
      </main>
      
      {/* About Section with Image and Text */}
      <section className="bg-black text-white py-20" style={{ marginBottom: '0' }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Image Section */}
          <div className="flex justify-center mb-12" style={{ marginTop: '5cm' }}>
            <Image 
              src="/images/intro.jpg" 
              alt="AI-BioX Introduction" 
              width={1000} 
              height={600} 
              className="rounded-lg object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="text-center">
            <h2 className="font-bold mb-8" style={{ fontSize: '5.5rem' }}>
              About <span className="block mt-1" style={{ color: '#3B82F6' }}>AI-BioX</span>
            </h2>
            <div className="text-gray-300 max-w-4xl mx-auto" style={{ fontSize: '1.2em', lineHeight: '2.2', textAlign: 'center' }}>
              <div>
                'AI-BioX'는 2017년 첫 개최 이후 AI, Bio, Contents, Digital wellness를 <br /> 아우르며 라이프메타 산업의 발전과 함께 성장해온 글로벌 행사 입니다.<br />
                AI와 Bio를 중심으로 한 기술적 진보는 산업 전반에 새로운 흐름을 만들어냈고,<br /> 'AI-BioX'는 그 변화를 공유하고 확산시키는 교류의 장으로 자리했습니다.<br />
                K-BioX와 공동 주최하는 이번 행사는 4차 산업혁명의 흐름 속에서<br /> 산업간 융합과 최신 동향, 미래 전략을 논의하는 국제적 무대입니다.<br />
                글로벌 기업과 기관, 학계 석학과 차세대 인재들이 한 자리에 모여 <br />스마트테크가 나아갈 방향을 모색하고, 다음 단계의 비전과 담론을 제시합니다.<br />
                <span style={{ fontSize: '1.08em', fontWeight: '800', display: 'block', marginTop: '0.5cm', marginBottom: '5cm' }}>
                  'AI-BioX'에서 산업의 경계를 넘어서는 지식과 통찰을 가장 먼저 만나보세요.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Grow with AI BioX Section */}
      <section className="mt-20" style={{ backgroundColor: 'white' }}>
        {/* White Background Section with Image */}
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-white flex flex-col items-center justify-center" style={{ paddingTop: '13cm' }}>
          <h2 className="font-bold mb-6" style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: '700', fontSize: '5.712rem', marginTop: '-11cm' }}>
            <span style={{ color: '#000000' }}>Grow with</span> <span style={{ color: '#3B82F6' }}>AI-BioX</span>
          </h2>
          <Image 
            src="/images/grow.jpg" 
            alt="Grow with AI-BioX" 
            width={2059} 
            height={1030} 
            className="rounded-lg object-cover"
            style={{ marginBottom: '-7cm' }}
          />
        </div>
        
        {/* White Background with Text */}
        <div className="bg-white text-black py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-blue-400">
                Grow with AI-BioX
              </h2>
              <div className="text-gray-700 max-w-4xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
                <p className="mb-4">
                  AI-BioX와 함께 성장하고 발전하는 글로벌 플랫폼에서
                  혁신적인 기술과 아이디어를 공유하고 미래를 만들어가세요.
                </p>
                <p className="mb-4">
                  글로벌 네트워킹과 지식 교류를 통해
                  차세대 AI와 바이오 기술의 미래를 함께 만들어가세요.
                </p>
                <p className="font-semibold text-blue-600 mb-8">
                  함께 성장하는 AI-BioX 커뮤니티에 참여하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional White Space */}
        <div className="bg-white py-20 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                더 많은 기회와 성장
              </h3>
              <div className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                <p className="mb-4">
                  AI-BioX 플랫폼을 통해 다양한 산업 분야의 전문가들과 만나
                  새로운 아이디어와 기술을 공유하고 협업할 수 있습니다.
                </p>
                <p className="mb-4">
                  글로벌 트렌드와 최신 기술 동향을 파악하고
                  미래를 준비하는 인사이트를 얻을 수 있습니다.
                </p>
                <p>
                  지속적인 학습과 성장을 통해 개인과 조직의 발전을 이끌어가세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 9 Symposiums Section */}
      <section className="bg-white py-8" style={{ marginTop: '5cm', marginBottom: '5cm' }}>
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <Image 
            src="/images/9 symposia Theme.png" 
            alt="9 Symposiums Theme" 
            width={1498} 
            height={749} 
            className="w-auto h-auto object-contain"
          />
        </div>
      </section>
      
      {/* Program at Glance Section */}
      <section className="py-40 md:py-48 lg:py-56" style={{ 
        backgroundColor: '#ffffff', 
        marginTop: '6rem', 
        marginBottom: '6rem',
        borderTop: '2px solid #e5e7eb',
        borderBottom: '2px solid #e5e7eb'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="text-center mb-8" style={{ marginTop: '3rem', paddingTop: '2rem', marginBottom: '1.5cm' }}>
            <h2 className="mb-0" style={{ 
              fontFamily: 'Pretendard, sans-serif', 
              fontSize: '4rem', 
              fontWeight: '800', 
              color: '#3B82F6',
              textAlign: 'center',
              marginBottom: '1.7rem'
            }}>
              Program at Glance
            </h2>
            <p className="max-w-4xl mx-auto leading-relaxed mb-4" style={{ 
              fontFamily: 'Pretendard, sans-serif',
              fontSize: '1.5rem', 
              fontWeight: '400', 
              color: '#000000',
              textAlign: 'center',
              marginTop: '1.7rem'
            }}>
              AI-BioX 2025의 주요 프로그램과 일정을 한눈에 확인하세요.
            </p>
          </div>
          <div className="flex justify-center items-center mb-20" style={{ marginTop: '1.5cm' }}>
            <Image 
              src="/images/Program at Glance.jpg" 
              alt="Program at Glance" 
              width={1200} 
              height={800} 
              className="rounded-lg object-contain shadow-lg w-full max-w-6xl h-auto"
              style={{ transform: 'scale(1.2)' }}
            />
          </div>
          <div className="text-center" style={{ height: '10rem', marginBottom: '3cm' }}>
            {/* 추가 화이트 공간 */}
          </div>
        </div>
      </section>
      
      {/* Additional Content Sections */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            <div className="bg-gray-50 hover:bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">Conference</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                최신 AI와 바이오 기술 트렌드를 공유하는 글로벌 컨퍼런스
              </p>
            </div>
            <div className="bg-gray-50 hover:bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-500">Exhibition</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                혁신적인 기술과 제품을 선보이는 전시회
              </p>
            </div>
            <div className="bg-gray-50 hover:bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-500">Networking</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                업계 전문가들과의 네트워킹 기회
              </p>
            </div>
          </div>
          
          {/* More Content Space */}
          <div className="text-center py-16 md:py-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-800">
              더 많은 콘텐츠를 위한 공간
            </h3>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              여기에 추가할 내용들을 자유롭게 배치하세요!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}