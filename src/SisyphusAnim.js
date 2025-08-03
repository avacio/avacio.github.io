
export default function SisyphusAnim() {

 const [isWide, setIsWide] = useState(false)


	function animSequence() {
	  setTimeout(function () {
		// Animated loop X after initial intro anim
		document.getElementById('first').style.display = 'none'
	  }, 9 * 1000)

	  setTimeout(function () {
		document.getElementById('loop').style.display = 'block'
	  }, 9 * 1000)
	}

	useEffect(() => {
	  animSequence();

	  // Handler to update window size state
	  const handleResize = () => {
		setIsWide(window.innerWidth > 900);
	  };

	  handleResize();
	  // Add event listener for 'resize'
	  window.addEventListener('resize', handleResize);

	  // Clean up function to remove event listener on component unmount
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };

	}, []); // Empty dependency array ensures it runs only once

	return (
		<div className="Sisyphus">


	  </div>
	);
  }
