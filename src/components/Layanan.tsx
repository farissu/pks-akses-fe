import React from "react";

class Layanan extends React.PureComponent {
  render() {

    const layananItems = [
      { name: "kelas", imageSrc: "/kelas.png", width: 72, height: 72, marginTop: '-5px', marginLeft: '27px', textMarginTop: '0px', textMarginLeft: '42px' },
      { name: "event", imageSrc: "/event.png", width: 44, height: 44, marginTop: '0px', marginLeft: '25px', textMarginTop: '8px', textMarginLeft: '30px' },
      { name: "ajak teman", imageSrc: "/teman.png", width: 75, height: 75, marginTop: '-8px', marginLeft: '5px', textMarginTop: '1px', textMarginLeft: '15px' },
      { name: "sapa pks", imageSrc: "/sapa.png", width: 50, height: 50, marginTop: '-4px', marginLeft: '15px', textMarginTop: '10px', textMarginLeft: '0px' },
      { name: "aspirasi", imageSrc: "/aspirasi.png", width: 35, height: 35, marginTop: '13px', marginLeft: '42px', textMarginTop: '7px', textMarginLeft: '38px' },
      { name: "berbagi", imageSrc: "/berbagi.png", width: 70, height: 70, marginTop: '14px', marginLeft: '14px', textMarginTop: '-1px', textMarginLeft: '28px' },
      { name: "kenal bcad", imageSrc: "/kenal.png", width: 43, height: 43, marginTop: '20px', marginLeft: '20px', textMarginTop: '6px', textMarginLeft: '15px' },
      { name: "mutabaah", imageSrc: "/mutabaah.png", width: 43, height: 43, marginTop: '17px', marginLeft: '17px', textMarginTop: '0px', textMarginLeft: '0px' },
    ];

    return (
      <section className="py-9 pt-4 max-w-md" style={{ justifyContent: 'center',width: '100%'  }}>

        <p style={{ marginLeft: '45px', marginTop: '-35px', marginBottom: '20px', color: '#2D4356', fontSize: '13px', opacity: "0.5" }}>
          Temukan berbagai manfaat di <span style={{ fontWeight: 'bold', color: '#000' }}>PKS</span>Akses
          <br />lalu berikan manfaat untuk sekitarmu!
        </p>

        <div className="layanan-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', justifyContent: 'center' }}>
          {layananItems.map((item, index) => (
            <div key={index} className="layanan-item" style={{ textAlign: 'center', width: '100%' }}>
              <img
                src={item.imageSrc}
                alt={item.name}
                width={item.width}
                height={item.height}
                style={{ margin: '0 auto', marginTop: item.marginTop }}
              />
              <p style={{ marginTop: item.textMarginTop, color: '#2D4356', fontSize: '13px', opacity: "0.5" }}>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default React.memo(Layanan);