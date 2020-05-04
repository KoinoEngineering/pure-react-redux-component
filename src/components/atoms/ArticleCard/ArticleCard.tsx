import { Card, CardContent, CardHeader, CardProps, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { generatePath, NavLink } from "react-router-dom";
import { ActiveRecord } from "src/apis/ApiTypes";
import { Article } from "src/apis/Articles/ArticlesReducer";
import ROUTES from "src/utils/Routes";

const useCardContentStyle = makeStyles(createStyles({
    root: {
        whiteSpace: "pre",
    }
}));

interface ArticleCardProps extends CardProps {
    data: ActiveRecord<Article>;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data, ...cardProps }) => {
    const cardContentClasses = useCardContentStyle();
    return <NavLink to={generatePath(ROUTES.ARTICLE, { id: data.id })}>
        <Card raised {...cardProps}>
            <CardHeader title={data.title} />
            <CardContent classes={cardContentClasses}>
                {data.body}
            </CardContent>
        </Card>
    </NavLink>;
};

export default ArticleCard;