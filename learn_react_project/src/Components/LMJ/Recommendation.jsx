export default function Reco() {
    let currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 1 && currentMonth <= 6;
    let reco = isSpring ? (
        <div>
            <p>C'est le printemps! Rempotez 🌱</p>
        </div>
    ) :
            null
    return reco;
}