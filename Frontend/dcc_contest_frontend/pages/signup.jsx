import React from "react";
import Navbar from "../components/Navbar";
import signupQues from "../components/signupQues";
import heroSignupLottie from "../public/heroSignupLottie.json";
import Lottie from "lottie-react";
import axios from "axios";

function signup() {
  const [quesInd, setQuesInd] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [githubURL, setGithubURL] = React.useState("");
  const [linkedinURL, setLinkedinURL] = React.useState("");
  const [codeforcesURL, setCodeforcesURL] = React.useState("");
  const [codechefURL, setCodechefURL] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [text, setText] = React.useState("");

  const onSubmit = () => {
    const data = {
      name,
      email,
      password,
      confirmPassword,
      userName,
      githubURL,
      linkedinURL,
      codeforcesURL,
      codechefURL,
      bio,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/auth/register", data, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onBackClick = () => {
    if (quesInd <= 0) {
      return;
    }
    switch (quesInd - 1) {
      case 0:
        setText(name);
        break;
      case 1:
        setText(userName);
        break;
      case 2:
        setText(email);
        break;
      case 3:
        setText(password);
        break;
      case 4:
        setText(confirmPassword);
      case 5:
        setText(githubURL);
        break;
      case 6:
        setText(linkedinURL);
        break;
      case 7:
        setText(codeforcesURL);
        break;
      case 8:
        setText(codechefURL);
        break;
      case 9:
        setText(bio);
        break;
      default:
        break;
    }
    setQuesInd(quesInd - 1);
  };

  const onNextClick = () => {
    if (quesInd >= signupQues.length - 1) {
      return;
    }

    switch (quesInd) {
      case 0:
        setName(text);
        break;
      case 1:
        setUserName(text);
        break;
      case 2:
        setEmail(text);
        break;
      case 3:
        setPassword(text);
        break;
      case 4:
        setConfirmPassword(text);
      case 5:
        setGithubURL(text);
        break;
      case 6:
        setLinkedinURL(text);
        break;
      case 7:
        setCodeforcesURL(text);
        break;
      case 8:
        setCodechefURL(text);
        break;
      case 9:
        setBio(text);
        break;
      default:
        break;
    }

    setQuesInd(quesInd + 1);

    setText("");
  };

  return (
    <div className="">
      <Navbar />
      <div className="container min-w-full mt-16 flex justify-around items-center">
        <Lottie animationData={heroSignupLottie} className="w-4/12" />
        <div className={`${quesInd < signupQues.length - 1 ? "" : "hidden"}`}>
          <div className="heroForm mt-8 mx-24 text-3xl">
            {signupQues[quesInd].question}
          </div>
          <div className="flex justify-center items-center">
            <button
              className="btn btn-outline btn-success rounded-full mx-6"
              onClick={onBackClick}
            >
              {"|<"}
            </button>
            <input
              type="text"
              className="input text-2xl rounded-lg my-4 bg-inherit input-success h-16 w-full max-w-lg"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onNextClick();
              }}
            />
            <button
              className="btn btn-outline btn-success rounded-full mx-6"
              onClick={onNextClick}
            >
              {">|"}
            </button>
          </div>
        </div>
        <div
          className={`${
            quesInd === signupQues.length - 1
              ? "flex justify-center items-center flex-col"
              : "hidden"
          }`}
        >
          <p className="text-xl my-5">
            By clicking on the button you accept to our terms and conditions!
          </p>
          <button
            className="btn btn-outline btn-success rounded-full mx-6"
            onClick={onSubmit}
          >
            {"Yay Lets Go!"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default signup;
