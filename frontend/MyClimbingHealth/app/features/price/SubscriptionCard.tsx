import { useNavigate } from "react-router";
import styles from './pricing.module.css';

type Props = {
    planName: string;
    desc: string;
    cost: string;
    benefits: string[];
    planKey: string;
};

export default function SubscriptionCard({ planName, desc, cost, benefits, planKey }: Props) {
    const navigate = useNavigate();

    return (
        <div
            className={`${styles.card} flex flex-col gap-5 p-8 w-80 cursor-pointer`}
            onClick={() => navigate(`/account/createaccount?plan=${planKey}`)}
        >
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{planName}</h3>
                <p className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{desc}</p>
            </div>

            <div className="flex items-end gap-1">
                <span className={styles.price}>${cost}</span>
                <span className="text-sm mb-1" style={{ color: 'var(--color-on-surface-variant)' }}>/mo</span>
            </div>

            <ul className="flex flex-col gap-2">
                {benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                        <span className={`${styles.benefitsList}`}>- {item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}