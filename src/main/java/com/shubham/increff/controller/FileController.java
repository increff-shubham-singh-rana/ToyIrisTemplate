package com.shubham.increff.controller;

import com.shubham.increff.util.ApiException;
import com.shubham.increff.util.ProcessTsv;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.Closeable;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@Api
@RestController
public class FileController {


    @ApiOperation(value = "Upload File Tsv")
    @RequestMapping(value = "/api/file/upload/{fileName}", method = RequestMethod.POST)
    public void uploadFileTsv(@PathVariable String fileName, @RequestPart("file") MultipartFile file) {
        System.out.println("File Is Uploaded Successfully :- " + fileName);
    }

    @ApiOperation(value = "Download Input for File ")
    @RequestMapping(path = "/api/file/input/{fileName}", method = RequestMethod.GET)
    public void exportInputTSV(@PathVariable String fileName, HttpServletResponse response) throws IOException {
        ProcessTsv.createFileResponse(new File("src/main/java/com/shubham/increff/Files/fileInput.tsv"), response);
        System.out.println("Export Input File is Successful :- " + fileName);
    }

    @ApiOperation(value = "Download template for File")
    @RequestMapping(path = "/api/file/template/{fileName}", method = RequestMethod.GET)
    public void exportTemplateTSV(@PathVariable String fileName, HttpServletResponse response) throws IOException {
        ProcessTsv.createFileResponse(new File("src/main/java/com/shubham/increff/Files/fileTemplate.tsv"), response);
        System.out.println("Download Input Template File is Successful :- " + fileName);

    }

    @ApiOperation(value = "Download Errors for input")
    @RequestMapping(path = "/api/file/errors/{fileName}", method = RequestMethod.GET)
    public void exportErrorTSV(@PathVariable String fileName, HttpServletResponse response) throws IOException {
        ProcessTsv.createFileResponse(new File("src/main/java/com/shubham/increff/Files/fileError.tsv"), response);
        System.out.println("Download Validation Error for File is Successful :- " + fileName);

    }

}
