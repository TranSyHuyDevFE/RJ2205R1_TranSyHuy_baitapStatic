class Infor {
  constructor(name, detail, thamSoTruyenVao) {
    this.name = name;
    this.detail = detail;
    this.thamSoTruyenVao = thamSoTruyenVao;
  }
  math() {
    console.log(
      this.name +
        "\n" +
        this.detail +
        "\n" +
        this.long +
        "\n" +
        this.thamSoTruyenVao * 3
    );
  }
}
class hinhHoc extends Infor {
  constructor(name, detail, long, thamSoTruyenVao) {
    super(name, detail, thamSoTruyenVao);
    this.long = long;
  }
}

var st1 = new hinhHoc("Hinh Vuong", "4 canh bang nhau", 3, 3);
st1.math();
