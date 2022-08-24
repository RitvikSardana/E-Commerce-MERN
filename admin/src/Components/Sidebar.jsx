import styled from "styled-components";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
const Sidebar = () => {
  return (
    <Container>
        <Wrapper>
            <SidebarMenu>
                <SidebarTitle>
                    Dashboard
                </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem className="active">
                            <LineStyleIcon />
                            Home
                        </SidebarListItem>
                        <SidebarListItem>
                            <TimelineIcon />
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <TrendingUpIcon />
                            Sales
                        </SidebarListItem>
                    </SidebarList>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarTitle>
                    Quick Menu
                </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem >
                            <PersonOutlinedIcon />
                            Users
                        </SidebarListItem>
                        <SidebarListItem>
                            <StorefrontOutlinedIcon />
                            Products
                        </SidebarListItem>
                        <SidebarListItem>
                            <AttachMoneyOutlinedIcon />
                            Transactions
                        </SidebarListItem>
                        <SidebarListItem>
                            <BarChartOutlinedIcon />
                            Reports
                        </SidebarListItem>
                    </SidebarList>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarTitle>
                    Notification
                </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem >
                            <EmailOutlinedIcon />
                            Mail
                        </SidebarListItem>
                        <SidebarListItem>
                            <DynamicFeedOutlinedIcon />
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem>
                            <ChatBubbleOutlineIcon />
                            Messages
                        </SidebarListItem>
                    </SidebarList>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarTitle>
                    Staff
                </SidebarTitle>
                    <SidebarList>
                        <SidebarListItem >
                            <WorkOutlineIcon />
                            Manage
                        </SidebarListItem>
                        <SidebarListItem>
                            <TimelineIcon />
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <ReportIcon />
                            Reports
                        </SidebarListItem>
                    </SidebarList>
            </SidebarMenu>
        </Wrapper>
    </Container>
  )
}

const Container = styled.aside`
  padding: 0.5rem 1rem;
  flex:1;
  height: calc(100vh - 60px);
  background-color:rgb(251,251,255);
  top:50;
`;

const Wrapper = styled.div`
    padding:20px;
    color:#555;

`;
const SidebarMenu = styled.div`
    /* margin-bottom: 0.5rem; */
`;
const SidebarTitle = styled.h3`
    font-size:0.8rem;
    color:rgb(187,186,186);
`;
const SidebarList = styled.ul`
    list-style:none;
    padding:0.3rem;
`;
const SidebarListItem = styled.li`
    padding:0.3rem;
    display:flex;
    align-items:center;
    cursor: pointer;
    border-radius:0.6rem;
    margin-bottom:0.6rem;
    &:hover,&.active{
        background-color:rgb(228,228,250);
    }
`;




export default Sidebar