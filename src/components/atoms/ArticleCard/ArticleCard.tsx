import { Card, CardProps, CardHeader, CardContent, makeStyles, createStyles } from "@material-ui/core";
import React from "react";
import ROUTES from "src/utils/Routes";
import { NavLink, generatePath } from "react-router-dom";
import { Article } from "src/apis/articles/ArticlesReducer";

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