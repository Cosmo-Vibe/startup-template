import React from 'react';
import styles from './Pricing.module.css';

interface PricingPlan {
  name: string;
  price: number;
  storage: string;
  emails: string;
  domains: string;
  support: string;
  highlighted?: boolean;
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      price: 10,
      storage: '10GB',
      emails: '10',
      domains: '10',
      support: 'Endless'
    },
    {
      name: 'Pro',
      price: 25,
      storage: '25GB',
      emails: '25',
      domains: '25',
      support: 'Endless',
      highlighted: true
    },
    {
      name: 'Premium',
      price: 50,
      storage: '50GB',
      emails: '50',
      domains: '50',
      support: 'Endless'
    }
  ];

  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.sectionTitle}>PRICING</h2>
      <p className={styles.sectionSubtitle}>Choose a pricing plan that fits your needs.</p>
      
      <div className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`${styles.plan} ${plan.highlighted ? styles.highlighted : ''}`}
          >
            <div className={`${styles.planHeader} ${plan.highlighted ? styles.highlightedHeader : ''}`}>
              <h3>{plan.name}</h3>
            </div>
            <div className={styles.planBody}>
              <p><b>{plan.storage}</b> Storage</p>
              <p><b>{plan.emails}</b> Emails</p>
              <p><b>{plan.domains}</b> Domains</p>
              <p><b>{plan.support}</b> Support</p>
              <div className={styles.priceContainer}>
                <h3 className={styles.price}>$ {plan.price}</h3>
                <span className={styles.period}>per month</span>
              </div>
              <button className={styles.signupButton}>Sign Up</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
