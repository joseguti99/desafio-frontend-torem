import { useState } from "react"
import * as Menu from '@radix-ui/react-context-menu';
import styled from 'styled-components';
import { MockTicketData } from "../../utils/mockData"
import Ticket from "../Ticket";

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  padding: 5px;
`;

const Item = styled.div`
  color: #000;
  padding: 3px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #36dd81;
  }
`;

interface tickets {
  ticketOpen: boolean;
  ticketClose: boolean;
}

export default function ChatTabContextMenu() {
  const [ticket, setTicket] = useState<tickets>({ ticketOpen: false, ticketClose: false })

  const ticketsOpen = MockTicketData.filter((ticket) => ticket.status === 0)
  const ticketsClose = MockTicketData.filter((ticket) => ticket.status === 1)

  const handleShowTicket = (tickets: tickets) => {
    setTicket(tickets)
  };

  return (
    <Container>
      <Item onClick={() => handleShowTicket({ ...ticket, ticketOpen: !ticket.ticketOpen })}>Ver ticket abierto</Item>

      {ticket.ticketOpen ? ticketsOpen.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />) : ""}

      <Menu.Separator />

      <Item onClick={() => handleShowTicket({ ...ticket, ticketClose: !ticket.ticketClose })}>Ver ticket cerrado</Item>
      {ticket.ticketClose ? ticketsClose.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />) : ""}


    </Container>
  );
}
