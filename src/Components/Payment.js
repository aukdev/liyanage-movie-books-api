import { useState } from "react";
import styled from "styled-components";

const Payment = ({ setPaymentSet }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const paymentHandle = (e) => {
    e.preventDefault();
    console.log(cardHolderName, cardNumber, cardExpMonth, cardExpYear, cardCVC);
  };

  return (
    <PaymentContainer>
      <PaymentContainerBody>
        <h1>Payment Details</h1>
        <img src="/image/payment.png" alt="payment-method" />
        <PaymentForm onSubmit={paymentHandle}>
          <PaymentFormInputBox>
            <p>Card Holder Name</p>
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => {
                e.preventDefault();
                setCardHolderName(e.target.value);
              }}
              placeholder="Your Name"
            />
          </PaymentFormInputBox>

          <PaymentFormInputBox>
            <p>Card Number</p>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => {
                e.preventDefault();
                setCardNumber(e.target.value);
              }}
              placeholder="0000-0000-0000-0000"
            />
          </PaymentFormInputBox>

          <PaymentFormExpCvcBlock>
            <PaymentFormInputBox
              style={{
                width: "70%",
              }}
            >
              <p>Expiration Date</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  value={cardExpMonth}
                  onChange={(e) => {
                    e.preventDefault();
                    setCardExpMonth(e.target.value);
                  }}
                  placeholder="Month"
                />
                <input
                  type="text"
                  value={cardExpYear}
                  onChange={(e) => {
                    e.preventDefault();
                    setCardExpYear(e.target.value);
                  }}
                  placeholder="Year"
                />
              </div>
            </PaymentFormInputBox>
            <PaymentFormInputBox
              style={{
                width: "25%",
              }}
            >
              <p>CVC</p>
              <input
                type="text"
                value={cardCVC}
                onChange={(e) => {
                  e.preventDefault();
                  setCardCVC(e.target.value);
                }}
                placeholder="000"
              />
            </PaymentFormInputBox>
          </PaymentFormExpCvcBlock>

          <PaymentButton>
            <button>Pay</button>
            <button
              style={{
                marginLeft: "20px",
              }}
              onClick={() => {
                setPaymentSet((pre) => pre && false);
              }}
            >
              Cancle
            </button>
          </PaymentButton>
        </PaymentForm>
      </PaymentContainerBody>
    </PaymentContainer>
  );
};

export default Payment;

const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #f7f1e6;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentContainerBody = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  width: 95%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 90%;
    margin-top: 20px;
    padding-bottom: 7px;
    border-bottom: 2px solid gray;
    font-size: 20px;
  }

  img {
    margin-top: 30px;
    margin-bottom: 20px;
    height: 40px;
    object-fit: contain;
  }
`;

const PaymentForm = styled.form`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const PaymentFormInputBox = styled.div`
  position: relative;
  width: 100%;
  padding: 7px;
  border: 2px solid #fca103;
  border-radius: 3px;

  p {
    position: absolute;
    top: -17px;
    left: 12px;
    padding: 0 7px;
    background-color: white;
    color: #fca103;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 7px;
    font-size: 14px;
    font-weight: 600;
    color: black;
  }
`;

const PaymentFormExpCvcBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaymentButton = styled.div`
  margin: 20px 0 30px;
  width: 100%;
  text-align: center;

  button {
    padding: 12px 20px;
    background-color: #fca103;
    border-radius: 7px;
    font-weight: 600;
    cursor: pointer;
    transition: all 400ms ease-in;

    &:hover {
      background-color: red;
      color: white;
    }
  }
`;
