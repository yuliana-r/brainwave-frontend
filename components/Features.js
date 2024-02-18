import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="features">
      <h1>Check our features</h1>
      <p className="info">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <p className="info">
        Build your next consultancy website within few minutes.
      </p>

      <div className="feature-cards">
        <FeatureCard icon="⚙️" title="Quick setup process" />
        <FeatureCard icon="🛒" title="Create custom orders" />
        <FeatureCard icon="💳" title="Multiple coupons" />
        <FeatureCard icon="🏅" title="Organize your campaigns" />
        <FeatureCard icon="👤" title="Manage customers" />
        <FeatureCard icon="📊" title="Track progress fast" />
      </div>
    </div>
  );
};

export default Features;
