import styled from 'styled-components/macro'
import { AirQuality } from './components/AirQuality/AirQuality'
import { Footer } from './components/footer/footer'
import { Modal } from './components/modal/Modal'
import { Nav } from './components/Nav/Nav'

export function App() {
  return (
    <AppContainer>
      <Nav />
      <AirQuality />
      <Modal title='zobacz więcej'>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat quam, porttitor vitae dapibus eget, blandit non diam. Curabitur aliquam, felis quis eleifend pulvinar, tellus arcu euismod est, non aliquet magna turpis a nisl. Fusce molestie porta suscipit. Maecenas accumsan volutpat rhoncus. Etiam ultricies ex risus, sit amet fringilla nisl interdum id. Fusce posuere tincidunt nunc, ac pellentesque eros vestibulum sit amet. Vestibulum bibendum lacus quis ullamcorper gravida.

        Aenean dignissim urna sit amet egestas interdum. Ut tincidunt quam eu nunc pretium dapibus. Proin id accumsan dolor, at maximus nunc. Duis sollicitudin, nisl sit amet mollis tempor, ex purus pellentesque ex, sit amet ornare orci sapien a ante. Ut risus ipsum, pulvinar quis facilisis nec, molestie nec massa. Mauris efficitur, erat a efficitur sagittis, felis diam tempor lacus, vitae ultrices purus erat et nunc. Suspendisse dapibus vel magna eu iaculis. Aliquam posuere luctus interdum. Proin ultricies sodales elit quis ultrices. Donec laoreet lacinia est nec pulvinar. Nunc lorem massa, congue ac ligula in, varius placerat sapien. Morbi vel est ut nulla faucibus gravida quis a magna. Nulla fringilla, sapien sit amet egestas dictum, sem erat euismod dolor, ut fringilla ex nisi ac ante. Fusce sed lacus aliquam ligula varius accumsan non id risus. Donec mattis consectetur augue, vel pharetra odio tincidunt id. Fusce ac interdum leo.

        Nulla ac est id enim sagittis ultrices. Donec tortor enim, rutrum sit amet euismod et, posuere in urna. Donec pulvinar varius sagittis. Aliquam id erat volutpat ligula molestie fermentum non sed dui. Sed leo justo, scelerisque ac lobortis eget, aliquet id lectus. Sed id venenatis justo. Donec malesuada sed arcu eu sodales. Morbi sagittis ipsum sed tortor tempus feugiat. Pellentesque mollis leo vitae erat facilisis, non euismod orci lacinia. Praesent dictum id lectus efficitur pretium. Nunc vel diam nunc. Phasellus scelerisque ipsum tempus, convallis ex vel, tempor lacus. Quisque ultricies dui eget arcu fermentum viverra. Aliquam consequat eros non tincidunt tristique. 
        </div>
      </Modal>
      <Footer />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.basic};
  background-color: ${({ theme }) => theme.colors.background};
`
