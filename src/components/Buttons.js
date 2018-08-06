import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({ onCreate, onRemove, onUpdate, onComplete }) => {
	return (
		<div className="Buttons">
			<div className="btn add" onClick={onCreate}>
				생성
      </div>
			<div className="btn remove" onClick={onRemove}>
				제거
      </div>
			<div className="btn add" onClick={onUpdate}>
				업데이트
      </div>
			<div className="btn remove" onClick={onComplete}>
				완료
      </div>
		</div>

	);
};

Buttons.propTypes = {
	onCreate: PropTypes.func,
	onRemove: PropTypes.func,
	onUpdate: PropTypes.func,
	onComplete: PropTypes.func
};

Buttons.defaultProps = {
	onCreate: () => console.warn('onCreate not defined'),
	onRemove: () => console.warn('onRemove not defined'),
	onUpdate: () => console.warn('onUpdate not defined'),
	onComplete: () => console.warn('onComplete not defined')
	
};

export default Buttons;