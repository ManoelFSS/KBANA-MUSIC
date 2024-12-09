import { Container_main } from './Styles'
import VisualDisplay from '../visualDisplay/VisualDisplay'
import MusicList from '../musicList/MusicList'

const Main = () => {
    return (
        <Container_main>
            <section className='left-main'>
                <VisualDisplay />
            </section>
            <section className='right-main'>
                <MusicList />
            </section>
        </Container_main>
    )
}

export default Main