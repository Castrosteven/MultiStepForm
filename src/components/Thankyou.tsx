import { Container } from "./Container";

export const ThankYou = () => {
  return (
    <Container>
      <div className="flex flex-col gap-5 items-center text-center">
        <img src={"./assets/icon-thank-you.svg"} />
        <div>Thank you!</div>
        <p>
          Thanks for confirming your subscription! <br />
          We hope you have fun using our platform. If you ever need support,
          <br /> please feel free to email us at support@loremgaming.com
        </p>
      </div>
    </Container>
  );
};
