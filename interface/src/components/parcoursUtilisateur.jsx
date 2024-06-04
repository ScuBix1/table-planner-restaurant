import { Card } from './card'
import { Click, Paiement, PaiementValid, Stylo, Validation } from './icon'

export const ParcoursUtilisateurs = () => {
    return (
            
            <section className="pb-14 px-14">
                <h2>Parcours de votre réservation</h2>
                <div className="flex lg:flex-row flex-col gap-4">
                <Card
                    svg={<Click height={'20px'} width={'20px'} color={'#4b5563'} />}
                    title={'Choisissez votre table'}
                    text={
                        <>
                            Réservez votre table, le nombre de personne est écrit sur la table. Attention les menus sont
                            unique par table.
                        </>
                    }
                />
                <Card
                    svg={<Validation width="20px" height="20px" color="#4b5563" />}
                    title={'Confirmation du choix'}
                    text={'Confirmez le menu et le nombre de personne'}
                />
                <Card
                    svg={<Stylo width="20px" height="20px" color="#4b5563" />}
                    title={'Remplir les informations'}
                    text={'Indiquez vos informations personnelles pour la réservation'}
                />
                <Card
                    svg={<Paiement width="20px" height="20px" color="#4b5563" />}
                    title={'Procédez au paiement'}
                    text={
                        <>
                            Veuillez remplir les information nécessaire au paiement de la réservation.{' '}
                            <span className="text-red-800">Aucun remboursement possible</span>
                        </>
                    }
                />
                <Card
                    svg={<PaiementValid width="20px" height="20px" color="#4b5563" />}
                    title={'Réservation validée'}
                    text={
                        'Une fois le paiement réussi votre réservation est validée. Dans les autres cas la table sera libérée.'
                    }
                />
                </div>
                
            </section>
    )
}
