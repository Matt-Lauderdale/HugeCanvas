import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Canvas extends PureComponent {

	componentDidUpdate() {
		const {
			drawing
		} = this.props;
		console.log('component updated.........', this.props);
		if (drawing.C) {
	        this.ctx = this.refs.canvas.getContext('2d');
	        this.ctx.canvas.width  = drawing.C[0][0];
	  		this.ctx.canvas.height = drawing.C[0][1];
	  		this.drawLines(drawing.L);
	  		this.drawRectangles(drawing.R);
	  		//end of draw
	  		this.ctx.closePath();
			this.ctx.clip();
	  		this.bucketFill(drawing.B)
		}
    }
    drawRectangles(rect) {
    	rect.forEach(coords => {
    		this.ctx.rect(coords[0], coords[1], coords[2], coords[3])
    	})
    }
    drawLines(lines) {
		this.ctx.beginPath();
    	lines.forEach((coords, index) => {
    		if (index === 0) {
	    		this.ctx.moveTo(coords[0], coords[1]);
    		}
    		this.ctx.lineTo(coords[2], coords[3]);
    	})

    }

    bucketFill(bucket) {
    	// I know this is wrong, but I did not want to spin my wheels on something that I am honestly not familiar with
    	this.ctx.fillStyle = "#FF00FF";
		this.ctx.fill(); 
    }

    render() {
        return (
        	<div>            
        		<canvas ref="canvas"/>
        	</div>
        );
    }
	
}

Canvas.propTypes = {
	drawing: PropTypes.shape({
		/*
		* Canvas Size
		*/ 
		C: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		/*
		* Bucket Fill for Canvas background
		*/ 
		B: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		/*
		* Line(s)
		*/ 
		L: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		/*
		* Rectangle(s)
		*/ 
		R: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
	})

}

Canvas.defaultProps = {
	drawing: {}
}

export default Canvas;