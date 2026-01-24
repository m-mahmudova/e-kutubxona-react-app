function Certificates() {
  const certs = [
    { title: "JavaScript asoslari", img: "/images/sertifikat2.jpg" },
    { title: "Web dasturlash", img: "/images/sertifikat1.jpg" },
    { title: "Frontend Developer", img: "/images/sertifikat3.jpg" },
  ];

  return (
    <main className="content py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Sertifikatlar
      </h2>

      <div className="grid grid-cols-3 gap-8 px-10">
        {certs.map((cert, i) => (
          <div key={i} className="rounded-xl shadow p-4 text-center">
            <img src={cert.img} className="h-[200px] mx-auto mb-4" />
            <h3 className="font-semibold">{cert.title}</h3>
            <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-full">
              Yuklab olish
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Certificates;
