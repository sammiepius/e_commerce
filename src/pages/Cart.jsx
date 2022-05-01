import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      cart
      <Footer />
    </Container>
  );
};

export default Cart;
