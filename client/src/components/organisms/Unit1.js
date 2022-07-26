import React from "react";
import { Col, Button, Image } from "react-bootstrap";

import pict from "../../assets/img/pict-unit1.png";
import layer from "../../assets/img/layer.png";

function Unit1() {
	return (
		<>
			<Col lg={6} className="d-flex flex-column justify-content-center">
				<h2 className="display-4 fw-semibold mb-4">Talenta Terbaik Negeri Untuk Menyongsong Revolusi Industri 4.0</h2>
				<p className="fs-20 mb-4">
					Penyedia talenta berbakat dari berbagai bidang industri untuk memenuhi kebutuhan industri anda
				</p>
				<Button variant="outline-primary" className="w-50 py-3 fw-semibold">
					Mulai Dari Sekarang
				</Button>
			</Col>
			<Col lg={6} className="d-flex justify-content-center align-items-center">
				<div className="mx-auto">
					<div className="imagelayer1">
						<Image className="pict-unit1 navbar-brand mx-auto " src={pict} alt="" width={500} height={500} />
						<div className="imagelayer2" />
						<Image className="layer navbar-brand mx-auto " src={layer} alt="" width={80} height={126} />
						<div className="imagelayer3" />
					</div>
				</div>
			</Col>
		</>
	);
}

export default Unit1;
