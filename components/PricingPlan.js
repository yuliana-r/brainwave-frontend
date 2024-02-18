const PricingPlan = (props) => {
  return (
    <div className="pricing-card">
      <p className="plan-name">{props.name}</p>
      <p>
        $ <span>{props.price}</span> / month
      </p>
      <p>billed monthly</p>

      <p>{props.license ? "✅" : "❌"} Commercial License</p>
      <p>{props.html ? "✅" : "❌"} 100+ HTML UI Elements</p>
      <p>
        {props.domain === "one" ? "✅ 01 Domain Sup" : "✅ Unlimited Domain"}
      </p>
      <p>{props.premium ? "✅" : "❌"} 6 Month Premium</p>
      <p>{props.updates ? "✅" : "❌"} Lifetime Updates</p>

      <button className="trial-button">Start Free Trial</button>
      <p>No credit card required</p>
    </div>
  );
};

export default PricingPlan;
