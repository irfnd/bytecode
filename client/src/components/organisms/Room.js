import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../Style/ChatStyle.module.css";
import send from "../../assets/icons/send.png";
import convertation from "../../assets/img/convertation.png";
const socket = io.connect("http://localhost:8000");

function Room() {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");
	const [showChat, setShowChat] = useState(false);
	const empety = false;

	const joinRoom = () => {
		if (username !== "" && room !== "") {
			socket.emit("join_room", room);
			setShowChat(true);
		}
	};

	return (
		<section className={styles.chat}>
			<Container fluid>
				<Row>
					<Col lg="12" className="md-4 d-none d-md-block border">
						<div className="d-flex justify-content-center">
							{empety ? (
								<div
									className="d-flex flex-column justify-content-center align-items-center h-75"
									style={{ gap: "20px" }}
								>
									<img src={send} alt="No Chat" />
									<h5 className="fw-bold">Belum ada chat</h5>
								</div>
							) : (
								<div>
									{!showChat ? (
										<div className="d-flex flex-column justify-content-center form-control container">
											<h3 className="text-center">Meeting with me</h3>
											<Row>
												<Col col="6">
													<img src={convertation} className="img-fluid rounded-top" alt="meet" />
												</Col>
												<Col col="6" className="justify-content-center">
													<div className={styles.formredirect}>
														<input
															className="form-control"
															type="text"
															placeholder="John..."
															onChange={(event) => {
																setUsername(event.target.value);
															}}
														/>
														<input
															className="form-control "
															type="text"
															placeholder="Room ID..."
															onChange={(event) => {
																setRoom(event.target.value);
															}}
														/>
														<button type="button" className={styles.btnredirect} onClick={joinRoom}>
															Join A Room
														</button>
													</div>
												</Col>
											</Row>
										</div>
									) : (
										<Chat socket={socket} username={username} room={room} />
									)}
								</div>
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Room;
