import PricingPlan from "./PricingPlan";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing & Plans</h1>
      <p className="info">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <p className="info">
        Build your next consultancy website within few minutes.
      </p>

      <div className="pricing-options">
        <p className="info">Monthly</p>
        <img
          src="https://cdn-icons-png.freepik.com/512/8532/8532448.png"
          alt="toggle"
          width="60"
        ></img>
        <p className="info">Yearly</p>
        <p className="highlight">SAVE 25%</p>
      </div>

      <div className="pricing-cards">
        <PricingPlan
          name="STARTER"
          price="19"
          license={true}
          html={true}
          domain="one"
          premium={false}
          updates={false}
        />

        <PricingPlan
          name="STANDARD"
          price="49"
          license={true}
          html={true}
          domain="unlimited"
          premium={true}
          updates={false}
        />

        <PricingPlan
          name="PREMIUM"
          price="99"
          license={true}
          html={true}
          domain="unlimited"
          premium={true}
          updates={true}
        />
      </div>
    </div>
  );
};

export default Pricing;
