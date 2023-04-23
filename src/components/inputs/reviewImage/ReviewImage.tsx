import { useRef, useState } from "react";
import * as S from "./style";
import { useFormContext } from "react-hook-form";
import { ICreateReviewForm } from "../../../interfaces/createReviewForm";
import { IProductDetail } from "../../../interfaces/productDetail";

function ReviewImage({ product }: { product: IProductDetail | undefined }) {
  const { register } = useFormContext<ICreateReviewForm>();
  const [file, setFile] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgSrc(reader.result + "");
      };
    }
  };
  return (
    <S.ReviewImageContainer>
      <S.Label htmlFor="imageF">수정</S.Label>
      <S.ImgInput
        {...register("image", {
          onChange: (e) => handleFile(e),
        })}
        id="imageF"
        type="file"
        accept=".png, .jpg, .jpeg"
      />
      {imgSrc ? <S.Img src={imgSrc} /> : <S.Img src={product?.originPath} />}
    </S.ReviewImageContainer>
  );
}

export default ReviewImage;
