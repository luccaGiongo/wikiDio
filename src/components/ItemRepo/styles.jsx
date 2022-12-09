import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a.remove{
        color: #d61818; 
        text-decoration:none;
        margin-top: 10px;

        :hover{
            color: #a5535e;
        }
    }

    a.ver{
        color: #1a94db;
        text-decoration: none;

        :hover{
            color: #307ba7;
        }
    }
    
    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }
    
`;