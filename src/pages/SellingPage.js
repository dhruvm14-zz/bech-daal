import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Sidebar from "../components/Sidebar";
import styles from "../styles/SellingPage.module.css";
import axios from "axios";

export default function SellingPage() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("")
  const [address2, setAddress2] = useState("")
  const [email, setEmail] = useState("")
  const [type, setType] = useState("plastic")
  const [quantity, setQuantity] = useState("")
  const [rate, setRate] = useState("")
  const [imageLinks, setImageLinks] = useState([]);

  const history = useHistory()

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      console.log(file);
      formData.append("file", file[0]);
      formData.append("upload_preset", "eroci6pi");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/vibsjain/image/upload",
        formData
      );
      setImageLinks([...imageLinks, res.data.url]);
      console.log(res.data.url);
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  };

  const handleImageClick = async (event, imageNum) => {
    console.log(event);
    await uploadImage(event.target.files);
  };

  const submit = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const data = {
      _id : user.user._id,
      number,
      address: (`${address} ${address2}`),
      type,
      rate,
      images: imageLinks,
      quantity
    }

    axios.post("http://localhost:5000/transactions/addTransaction", data).then(res => {
        history.push("/profile")
    }).catch(err => {
        console.log(err)
    })
  }

  return (
    <div className={styles.SellingPageOuterDiv}>
      <Sidebar></Sidebar>
      <div className={styles.SellingPageSecondHalf}>
        <div className={styles.SellingPageInnerDiv}>
          <form>
            <div className={styles.SellingPageBlock}>
              <input
                style={{ marginRight: "5vh" }}
                className={styles.SellingPageInput}
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              ></input>
              <input
                className={styles.SellingPageInput}
                type="text"
                placeholder="UserName"
                value={username}
                onChange={e => setUsername(e.target.value)}
              ></input>
            </div>
            <div className={styles.SellingPageBlock}>
              <input
                style={{ marginRight: "5vh" }}
                className={styles.SellingPageInput}
                type="email"
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              ></input>
              <input
                className={styles.SellingPageInput}
                type="text"
                placeholder="Contact Number"
                value={number}
                onChange={e => setNumber(e.target.value)}
              ></input>
            </div>
            <div className={styles.SellingPageBlock}>
              <input
                style={{ width: "45vw" }}
                className={styles.SellingPageInput}
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Address Line 1"
              ></input>
            </div>
            <div className={styles.SellingPageBlock}>
              <input
                style={{ width: "45vw" }}
                className={styles.SellingPageInput}
                type="text"
                value={address2}
                onChange={e => setAddress2(e.target.value)}
                placeholder="Address Line 2"
              ></input>
            </div>
          </form>
          <hr className={styles.SellingPageLine}></hr>
          <form>
            <div className={styles.SellingPageBlock}>
              <select
                style={{ fontSize: "15px", width: "21vw" }}
                className={styles.SellingPageInput}
                onChange={e => setType(e.target.value)}
                value={type}
                placeholder="type"
              >
                <option value="plastic">Plastic</option>
                <option value="aluminium">Aluminium</option>
                <option value="wood">Wood</option>
                <option value="paper">Paper</option>
              </select>
            </div>
            <div className={styles.SellingPageBlock}>
              <input
                className={styles.SellingPageInput}
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                placeholder="Quantity"
              ></input>
            </div>
            <div className={styles.SellingPageBlock}>
              <input
                className={styles.SellingPageInput}
                type="number"
                value={rate}
                onChange={e => setRate(e.target.value)}
                placeholder="Cost per kg"
              ></input>
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          {imageLinks.length > 0 ? (
            <div>
              <img className={styles.previewImage} src={imageLinks[0]} alt="" />
            </div>
          ) : (
            <div className={styles.SellingPageImageContainer}>
              <div className={styles.SellingPageAddImage}>
                <label for="image1">
                  <img
                    onClick={(event) => {
                      console.log(event);
                    }}
                    src="/img/addImage.jpeg"
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  name="image"
                  id="image1"
                  style={{ display: "none" }}
                  onMouseEnter={(event) => {
                    console.log("Mouse Entered");
                  }}
                  onClick={(event) => console.log(event.target)}
                  onChange={(event) => {
                    handleImageClick(event);
                  }}
                />
                <p style={{ color: "white" }}>Add Image</p>
              </div>
            </div>
          )}
          {imageLinks.length > 1 ? (
            <div>
              <img className={styles.previewImage} src={imageLinks[1]} alt="" />
            </div>
          ) : (
            <div className={styles.SellingPageImageContainer}>
              <div className={styles.SellingPageAddImage}>
                <label for="image2">
                  <img
                    onClick={(event) => {
                      console.log(event);
                    }}
                    src="/img/addImage.jpeg"
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  name="image"
                  id="image2"
                  style={{ display: "none" }}
                  onMouseEnter={(event) => {
                    console.log("Mouse Entered");
                  }}
                  onClick={(event) => console.log(event.target)}
                  onChange={(event) => {
                    handleImageClick(event);
                  }}
                />
                <p style={{ color: "white" }}>Add Image</p>
              </div>
            </div>
          )}

          {imageLinks.length > 2 ? (
            <div>
              <img className={styles.previewImage} src={imageLinks[2]} alt="" />
            </div>
          ) : (
            <div className={styles.SellingPageImageContainer}>
              <div className={styles.SellingPageAddImage}>
                <label for="image3">
                  <img
                    onClick={(event) => {
                      console.log(event);
                    }}
                    src="/img/addImage.jpeg"
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  name="image"
                  id="image3"
                  style={{ display: "none" }}
                  onMouseEnter={(event) => {
                    console.log("Mouse Entered");
                  }}
                  onClick={(event) => console.log(event.target)}
                  onChange={(event) => {
                    handleImageClick(event);
                  }}
                />
                <p style={{ color: "white" }}>Add Image</p>
              </div>
            </div>
          )}
        </div>
        <button className={styles.SellingPageSubmitButton} onClick={() => submit()}>
          Submit
        </button>
      </div>
    </div>
  );
}
