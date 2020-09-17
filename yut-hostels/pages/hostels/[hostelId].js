import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../../components/firebaseDB";
import Nav from "../../components/nav";
import HostelPage from '../../components/hostelPage';

export default () => {
	return (
		<Nav>
			<HostelPage />
		</Nav>
	);
};
