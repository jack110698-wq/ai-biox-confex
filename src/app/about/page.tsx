export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About AI-BioX ConfEx Platform</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Conference Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              AI-BioX ConfEx Platform은 AI, Bio, Digital Wellness, Contents를 아우르는 혁신 컨펙스입니다. 
              지식 교류와 미래 인재 육성을 선도하는 글로벌 학술·산업 플랫폼으로, 
              최신 기술 트렌드와 연구 성과를 공유하는 장입니다.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
            <div className="space-y-2 text-gray-300">
              <p><strong>Date:</strong> 12. 11 (Thu) – 13 (Sat)</p>
              <p><strong>Venue:</strong> COEX</p>
              <p><strong>Format:</strong> Hybrid (Online & Offline)</p>
              <p><strong>Language:</strong> Korean & English</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Key Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">AI & Machine Learning</h3>
              <p className="text-gray-300">최신 AI 기술과 머신러닝 연구 성과</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Bio Technology</h3>
              <p className="text-gray-300">바이오 기술의 혁신과 미래 전망</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Digital Wellness</h3>
              <p className="text-gray-300">디지털 헬스케어와 웰니스 기술</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

