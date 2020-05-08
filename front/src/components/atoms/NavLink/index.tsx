import { makeStyles } from "@material-ui/core";
import React, { ComponentProps } from "react";
import { NavLink as Org } from "react-router-dom";

export interface NavLinkProps extends ComponentProps<typeof Org> {
    disableUnderLine: boolean;
}

const useNavLinkStyle = makeStyles({
    nonUnderLine: {
        textDecoration: "none"
    }
})

const NavLink: React.FC<NavLinkProps> = ({ disableUnderLine, ...navLinkProps }) => {
    const classes = useNavLinkStyle();
    return <Org {...navLinkProps} className={disableUnderLine ? classes.nonUnderLine : undefined} />
}

export default NavLink