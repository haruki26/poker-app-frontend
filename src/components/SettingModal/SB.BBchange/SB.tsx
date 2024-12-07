const SettingModal: React.FC = () => {
        const BlindsForm = () => {
        const [smallBlind, setSmallBlind] = useState(0);
        const [bigBlind, setBigBlind] = useState(0);

        const handleSmallBlindChange = (e) => {
            const sbValue = Math.max(0, parseInt(e.target.value, 10) || 0); // 負の値を防ぐ
            setSmallBlind(sbValue);
            setBigBlind(sbValue * 2);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Small Blind: ${smallBlind}, Big Blind: ${bigBlind}`);
        };
        return (
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="smallBlind">Small Blind:</label>
                <input
                id="smallBlind"
                type="number"
                value={smallBlind}
                onChange={handleSmallBlindChange}
                required
                />
            </div>
            <div>
                <label htmlFor="bigBlind">Big Blind:</label>
                <input
                id="bigBlind"
                type="number"
                value={bigBlind}
                readOnly
                />
            </div>
            <button type="submit">Set Blinds</button>
            </form>
        };
        );
};
export default SettingModal;
        
