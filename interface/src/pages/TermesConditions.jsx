export const TermesEtConditions = () => {
    return (
        <section className="w-[70vw] flex flex-col mx-auto">
            <h2>Termes et conditions de la réservation</h2>
            <ol className="list-decimal">
                <li>
                    <h3 className="font-bold text-xl">Informations de paiement avec Stripe</h3>
                    <ul className="ml-6 list-disc">
                        <li>
                            <p>
                                Les paiements seront gérés avec Stripe. Les réservations sont non remboursables et non
                                annulables.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3 className="font-bold text-xl">Données obligatoire pour la réservation</h3>
                    <ul className="ml-6 list-disc">
                        <li>
                            <p>
                                Les informations obligatoire qui seront stocké dans la base de données sont les
                                suivants:
                            </p>
                        </li>
                        <ul className="ml-6 list-disc">
                            <li>Nom de la réservation</li>
                            <li>Email</li>
                            <li>Numéro de téléphone</li>
                        </ul>
                        <li>
                            <p>Ces informations sont à but informatif et ne seront pas partagées ou revendues.</p>
                            <p>
                                En cas de besoin de besoin, le développeur reste à votre disposition au numéro suivant:{' '}
                                <a href="tel:+33652929233">06.52.92.92.33</a>
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3 className="font-bold text-xl">Conditions de service</h3>
                    <ol className="ml-6 list-decimal">
                        <li className="font-bold text-md">Confirmation de Réservation</li>
                        <ul className="ml-6">
                            <li>
                                Toutes les réservations effectuées via notre application web sont définitives dès leur
                                confirmation.
                            </li>
                        </ul>
                        <li className="font-bold text-md">Paiement</li>
                        <ul className="ml-6">
                            <li>
                                Les paiements relatifs aux réservations sont traités via Stripe au moment de la
                                confirmation de la réservation.
                            </li>
                        </ul>
                        <li className="font-bold text-md">Non-Remboursement</li>
                        <ul className="ml-6">
                            <li>
                                Aucun remboursement ne sera accordé pour les réservations confirmées, qu'elles soient
                                partielles ou totales.
                            </li>
                        </ul>
                        <li className="font-bold text-md">Annulation</li>
                        <ul className="ml-6">
                            <li>
                                Les réservations ne peuvent pas être annulées une fois confirmées. Aucun remboursement
                                ne sera émis en cas d'annulation de la réservation.
                            </li>
                        </ul>
                        <li className="font-bold text-md">Contact</li>
                        <ul className="ml-6">
                            <li>
                                Pour toute question ou préoccupation concernant notre politique de non-remboursement,
                                veuillez nous contacter avant de finaliser votre réservation.
                            </li>
                        </ul>
                    </ol>
                </li>
            </ol>
        </section>
    )
}
