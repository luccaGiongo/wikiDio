import React from "react";

import { ItemContainer } from './styles';

export const ItemRepo = ({ repo, removeRepo }) => {

    const handleRemove = () => {
        removeRepo(repo.id)
    }

    return (
        <ItemContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" className="ver">Ver Repositório</a><br />
            <a href="" className="remove">Remover</a>
            <hr />
        </ItemContainer>
    );
}
export default ItemRepo;