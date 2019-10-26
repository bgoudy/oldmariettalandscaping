var NewComponent = React.createClass({
    render: function() {
      return (
  
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container"> 
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <a className="navbar-brand page-scroll" href="#page-top">Landscaper</a> </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about" className="page-scroll">About</a></li>
                <li><a href="#services" className="page-scroll">Services</a></li>
                <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
                <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
                <li><a href="#contact" className="page-scroll">Contact</a></li>
              </ul>
            </div>
            {/* /.navbar-collapse */} 
          </div>
          {/* /.container-fluid */} 
        </nav>
      );
    }
  });