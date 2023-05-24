import styled from "styled-components";
import { TicketData } from "../../types/chat";

const ContainerTicket = styled.div`
position: relative;
max-width: 400px;
height: 150px;
background: white;
margin: 0.5rem;
padding:0.5rem;

`;

const TempleateTicket = styled.div<any>`
position: relative;
padding: 0.5rem;
width: 95%;
height: 105px;
background: ${props => props.$success ? "#00DB77" : "#FF3633"};
margin: 10px;
`;

const TextTitle = styled.div`
margin-top: 0.5rem;
margin-left: 0.5rem;
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 15px;
/* identical to box height */


color: #FFFFFF;
`;

const Description = styled.div`
flex: none;
order: 0;
flex-grow: 0;
margin-top: 0.50rem;
margin-bottom: 0.25rem;
margin-left: 0.5rem;
width: 220px;
height: 20px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;

color: #FFFFFF;
`;

const Mark = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 7px;
gap: 10px;
margin-top: 0.25rem;
margin-left: 0.5rem;
font-size: 12px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
height: 15px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: black;
`;

const Line = styled.div`
width: 19px;
height: 0px;
border: 1px solid #FFFFFF;
transform: rotate(90deg);
`

const Row = styled.div`
    display: flex;
    align-items: center;
`

const Area = styled.div`
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
/* identical to box height */
color: #FFFFFF;
`

const Divider = styled.div`
position: absolute;
width: 50px;
height: 1px;
left: 220px;
top: 50px;
border: 2px dashed #FFFFFF;
transform: rotate(90deg);
`

const EclipseTop = styled.div`
position: absolute;
width: 24px;
height: 25px;
left: 234px;
top: -12px;
background: white;
border-radius: 0.75rem;
`

const EclipseBottom = styled.div`
position: absolute;
width: 24px;
height: 25px;
left: 234px;
top: 93px;
background: white;
border-radius: 0.75rem;
`

const DateTime = styled.div`
margin-top: 0.75rem;
width: 89px;
height: 15px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #FFFFFF;
`

const State = styled.div<any>`
padding-left:8px;
padding-top: 1px;
margin-right: 9%;
margin-top: 0.75rem;
width: 45px;
height: 15px;
background: #FFFFFF;
border-radius: 4px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: ${props => !props.$success ? "#00DB77" : "#FF3633"};
`

const IdTicket = styled.div`
margin-top: 15px;
margin-right: 8%;
width: 67px;
height: 14px;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
`

const RowBetween = styled.div`
display: flex;
justify-content: space-between;
`

interface props {
    ticket: TicketData
}

const Ticket = ({ ticket }: { ticket: TicketData }) => {

    return (
        <ContainerTicket>
            <TempleateTicket $success={!ticket.status}>
                <RowBetween>
                    <TextTitle>{ticket.title}</TextTitle>
                    <DateTime>{new Date(ticket.date).toLocaleDateString('en-GB')}</DateTime>
                </RowBetween>
                <RowBetween>
                    <Description>{ticket.description}</Description>
                    <State $success={ticket.status}>{!ticket.status ? "ALTA" : "BAJA"}</State>
                </RowBetween>
                <RowBetween>
                    <Row>
                        <Mark>{ticket.brand}</Mark>
                        <Line></Line>
                        <Area>{ticket.tag}</Area>
                    </Row>
                    <IdTicket>{ticket.id}</IdTicket>
                </RowBetween>
                <EclipseTop></EclipseTop>
                <Divider></Divider>
                <EclipseBottom></EclipseBottom>
            </TempleateTicket>

        </ContainerTicket>
    )
}

export default Ticket