 
 var applications = JSON.parse(localStorage.getItem('applications'));


 if (applications && applications.length > 0) {
     var table = document.createElement('table');

     var headerRow = table.insertRow();
     var headers = ['Application No.', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Resume', 'Cover Letter'];
     
     headers.forEach(headerText => {
         var headerCell = document.createElement('th');
         headerCell.textContent = headerText;
         headerRow.appendChild(headerCell);
     });

     applications.forEach(function(application, index) {
         var row = table.insertRow();
         row.insertCell(0).textContent = index + 1; 
         row.insertCell(1).textContent = application.fname;
         row.insertCell(2).textContent = application.lname;
         row.insertCell(3).textContent = application.pnumber;
         row.insertCell(4).textContent = application.email;
         row.insertCell(5).textContent = application.resume || 'No resume uploaded';
         row.insertCell(6).textContent = application.coverLetter;
     });

    
     document.getElementById('table-container').appendChild(table);
 } else {
     document.getElementById('table-container').textContent = 'No applications found.';
 }