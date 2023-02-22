import { Parallax } from "react-parallax";

import satellite from "../images/satellite.jpeg";

const ImageTwo = () => (
	<Parallax bgImage={satellite} strength={800} className="image">
		<div className="content">
			<span className="img-txt">A trip to space</span>
		</div>
	</Parallax>
);

export default ImageTwo;
