import "./Course.css";

const Course = () => {
  return (
    <div className="row margin-course main-background">
      <div className="col">
        <h4>ONGOING COURSES</h4>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item mx-2">1 Cost & Management Accounting</li>
          </ul>
        </div>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item mx-2">2 Human Resource Management</li>
          </ul>
        </div>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item  mx-2">3 Strategic Management</li>
          </ul>
        </div>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item  mx-2">4 Business Analytics</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <h4>ASSIGNMENTS</h4>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item p-2 mx-2">
              <p>Cost & Management Accounting SEMESTER 2</p>
              <p className="text-danger">Not submitted</p>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item p-3 mx-2">
              <p>Operations Management SEMESTER 2</p>
              <p className="text-danger">Not submitted</p>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul class="list-group">
            <li class="list-group-item p-3 mx-2">
              <p>Strategic Management SEMESTER 2</p>
              <p className="text-danger">Not submitted</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
