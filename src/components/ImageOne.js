import { Parallax } from "react-parallax";
import Nasa from "../images/nasa.jpg";

const ImageOne = () => (
	<Parallax bgImage={Nasa} strength={800} className="image">
		<div className="content">
			<span className="img-txt">A trip to space</span>
		</div>
	</Parallax>
);

export default ImageOne;
