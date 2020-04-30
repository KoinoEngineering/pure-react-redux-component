import { Card, CardProps, CardHeader, CardContent, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import { Article } from "src/modules/db/Articles/ArticlesReducer";
import ROUTES from "src/utils/Routes";
import { generatePath } from "react-router";
import { NavLink } from "react-router-dom";

const useCardContentStyle = makeStyles(createStyles({
    root: {
        whiteSpace: "pre",
    }
}));

interface ArticleCardProps extends CardProps {
    data: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data, ...cardProps }) => {
    const cardContentClasses = useCardContentStyle();
    return <NavLink to={generatePath(ROUTES.ARTICLE, { id: cardProps.id })}>
        <Card raised {...cardProps}>
            <CardHeader title={data.title} />
            <CardContent classes={cardContentClasses}>
                {data.body}
            </CardContent>
        </Card>
    </NavLink>;
};

export default ArticleCard;