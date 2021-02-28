import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../Redux/actions";
import { VISIBILITY_FILTERS } from "./constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <button key={`visibility-filter-${currentFilter}`} className={cx("filter",currentFilter === activeFilter && "filter--active" )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </button>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);
