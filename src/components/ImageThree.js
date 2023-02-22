import { Parallax } from "react-parallax";

import spaceDtation from "../images/spaceStation.jpeg";

const ImageThree = () => (
	<Parallax bgImage={spaceDtation} strength={800} className="image">
		<div className="content">
			<span className="img-txt">A trip to space</span>
		</div>
	</Parallax>
);

export default ImageThree;
