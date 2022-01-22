var baseUrl = $("meta[name=baseUrl]").attr("content")
baseUrl="http://localhost:9000/toyIRIS"
var allData ={}
function getUploadUrl() {
	return baseUrl + "/api/file";
}
function getReportUrl() {
	return baseUrl + "/api/report";
}
function getAlgoUrl(){
return baseUrl + "/api/algo";
}
function getRunUrl(){
return baseUrl + "/api/run";
}
function ajaxRestApiCallWithData(url, type, successfunction, json) {
	$.ajax({
		url: url,
		type: type,
		data: json,
		headers: {
			'Content-Type': 'application/json'
		},
		success: function (data) {
			successfunction(data);
		},
		error: function (errormessage) {
			messageAlertFail(errormessage.responseJSON.message)
		}
	});
}
function ajaxRestApiCallWithoutData(url, type, successfunction) {
	$.ajax({
		url: url,
		type: type,
		success: function (data) {
			successfunction(data);
		},
		error: function (errormessage) {
			messageAlertFail(errormessage.responseJSON.message)
		}
	});
}
function uploadAjax(url,formData)
{
$.LoadingOverlay('show')
            $.ajax({
			url: url,
			type: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			success: function (data) {
			    $.LoadingOverlay('hide')
			    $('#upload-modal').modal('toggle');
                messageAlertInfo("File Uploaded Successfully")

			},
			error: function (errormessage) {
			    $.LoadingOverlay('hide')
				messageAlertFail(errormessage.responseJSON.message)
			}
		});
}

function ajaxRestApiCall(url, type) {
	$.ajax({
		url: url,
		type: type,
		headers: {
			'Content-Type': 'application/json'
		},
		error: function (errormessage) {
			messageAlertFail(errormessage.responseJSON.message)
		}
	});
}

function messageAlertFail(message) {
         $.toast({
          heading: 'Error',
          text: message,
          icon: 'error',
          loader: false,
          showHideTransition: 'plain',
          hideAfter: 3000,
          position: {
            left: 1000,
            top: 30
          }
        })
}
function messageAlertPass(message) {
  $.toast({
    heading:'Success',
    text:message,
    icon:'success',
    loader: false,
    showHideTransition: 'fade',
    hideAfter: 3000,
    position: {
      left:1000,
      top:30
    }
  })
}
function messageAlertInfo(message)
{
  $.toast({
    heading:'Info',
    text:message,
    icon:'info',
    loader: false,
    showHideTransition: 'slide',
    hideAfter: 3000,
    position: {
      left:1000,
      top:10
    }
  })
}
function messageAlertWarn(message)
{
  $.toast({
    heading:'Warning',
    text:message,
    icon:'warning',
    loader: false,
    showHideTransition: 'slide',
    hideAfter: 3000,
    position: {
      left:1000,
      top:10
    }
  })
}

function uploadModal(id,name)
{
console.log(id)
console.log(name)
	var modal = $('#upload-data-form');
	modal.empty();
	messageTag ='<div class="modal-body" id="upload-form-body">'
	           +'<div><strong>Upload : </strong>'+name+ '</div>'
               +'<input type="file" id="file" name="file" onclick="resetButtons()" required><br>'
               +'<a href="#" onclick="downloadInputFileTemplate(\''+id+'\')">Download Template</a><br>'
               +'</div>'
               +'<div class="modal-footer" >'
               +'<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>'
               +'<button type="submit" class="btn btn-primary" id="upload-sales" onclick="upload(\''+id+'\')">Upload</button>'
               +'<div id="modal-footer"></div>'
	modal.append(messageTag)
	$('#upload-modal').modal('toggle');
}
function downloadReportData(reportName)
{
	var url = getReportUrl()+"/download/"+reportName;
	window.open(url, '_blank').focus();
}
function downloadErrorFile(id)
{
	url=getUploadUrl()+"/errors/"+id
	window.open(url, '_blank').focus();
}
function downloadInputFile(id)
{
	url=getUploadUrl()+"/input/"+id
	window.open(url, '_blank').focus();
}
function downloadInputFileTemplate(id)
{
	url=getUploadUrl()+"/template/"+id
	window.open(url, '_blank').focus();
}
function upload(id)
{
        var formData = new FormData();
        if(!$('input[type=file]')[0].files[0])
        {
            messageAlertFail("Please Select a FIle to Upload")
            return;
        }
        formData.append('file', $('input[type=file]')[0].files[0]);
        url=getUploadUrl() + '/upload/'+id;
        uploadAjax(url,formData)
		event.preventDefault();
        $('#upload-message-modal').on('hidden.bs.modal')
}








