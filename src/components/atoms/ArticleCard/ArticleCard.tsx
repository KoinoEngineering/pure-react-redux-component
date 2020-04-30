import { Card, CardProps, CardHeader, CardContent } from "@material-ui/core";
import React from "react";
import { Article } from "src/modules/db/Articles/ArticlesReducer";
import ROUTES from "src/utils/Routes";
import { generatePath } from "react-router";
import { NavLink } from "react-router-dom";

interface ArticleCardProps extends CardProps {
    data: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data, ...cardProps }) => {
    return <NavLink to={generatePath(ROUTES.ARTICLE, { id: data.id })}>
        <Card raised {...cardProps}>
            <CardHeader title={data.title} />
            <CardContent>
                {data.body}
            </CardContent>
        </Card>
    </NavLink>;
};

export default ArticleCard;