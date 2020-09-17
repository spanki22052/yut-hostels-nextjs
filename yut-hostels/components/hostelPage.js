import classes from "../../styles/hostelid.module.scss";
import Nav from '../components/nav';


export default function HostelPage() {
	const router = useRouter();
	const currentUrl = router.query.hostelId;
	const [hostelBadges, setBadges] = useState({});
	const [hostelsOject, setHostel] = useState({});

	useEffect(() => {
		firebase
			.firestore()
			.collection("hostels")
			.doc("hostelBadges")
			.get()
			.then((el) => setBadges(el.data().hostels));

		firebase
			.firestore()
			.collection("hostels")
			.doc("hostelsObject")
			.get()
			.then((el) => setHostel(el.data().hostels));
	}, []);

	const hostelObj = hostelsOject[hostelBadges[currentUrl]];

	return (
		<Nav>
			<div className={classes.hostelPage}>
				<div className={classes.hostelMainInfo}>
					<div className={classes.bookingInfo}>
						<div className={classes.reservation}></div>
						<div className={classes.booking}></div>
					</div>
					<div>
						<div className={classes.title}></div>
						<div className={classes.suptitle}></div>
						<div className={classes.progressBar}>
							<div
								className={classes.progress}></div>
						</div>
					</div>
				</div>
				<div>

				</div>
				<div>

				</div>
			</div>
		</Nav>
	)

}