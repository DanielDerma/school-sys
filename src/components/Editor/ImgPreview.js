import Image from "next/image";
const ImgPreview = ({ error, img }) => {
  return (
    <div>
      {img && (
        <Image
          src={typeof img === "string" ? img : URL.createObjectURL(img[0])}
          width={120}
          height={120}
          alt="preview image"
        />
      )}
      {error && <p style={{ color: "#d32f2f" }}>Editor Vacío!</p>}
    </div>
  );
};

export default ImgPreview;
