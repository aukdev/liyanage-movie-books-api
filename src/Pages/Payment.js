import styled from "styled-components";

const Payment = ({ windowWidth }) => {
  return (
    <PaymentContainer>
      <PaymentContainerBody>
        <h1>Payment Details</h1>
        <img
          src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
          alt="payment-method"
        />
        <PaymentForm>
          <PaymentFormInputBox>
            <p>Card Holder Name</p>
            <input type="text" placeholder="Your Name" />
          </PaymentFormInputBox>

          <PaymentFormInputBox>
            <p>Card Number</p>
            <input type="text" placeholder="0000-0000-0000-0000" />
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
                <input type="text" placeholder="Month" />
                <input type="text" placeholder="Year" />
              </div>
            </PaymentFormInputBox>
            <PaymentFormInputBox
              style={{
                width: "25%",
              }}
            >
              <p>CVC</p>
              <input type="text" placeholder="000" />
            </PaymentFormInputBox>
          </PaymentFormExpCvcBlock>

          <PaymentButton>
            <button>Pay</button>
          </PaymentButton>
        </PaymentForm>
      </PaymentContainerBody>
    </PaymentContainer>
  );
};

export default Payment;

const PaymentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentContainerBody = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  width: 90%;
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
