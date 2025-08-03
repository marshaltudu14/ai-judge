"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Scale,
  Upload,
  FileText,
  
  BookOpen,
  Gavel,
  AlertTriangle,
  
  Clock,
  
  
  X
} from 'lucide-react';


const AIJudgeWorkspace: React.FC = () => {
  const [caseDetails, setCaseDetails] = useState('');
  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockPrecedents = [
    {
      id: '1',
      title: 'Smith v. Jones (2023)',
      relevance: 95,
      summary: 'Similar contract dispute involving breach of warranty terms.',
      citation: '123 F.3d 456 (9th Cir. 2023)',
      keyPoints: ['Breach of warranty', 'Damages calculation', 'Mitigation of damages']
    },
    {
      id: '2',
      title: 'Brown v. Wilson (2022)',
      relevance: 87,
      summary: 'Precedent for calculating consequential damages in commercial contracts.',
      citation: '456 F.3d 789 (2nd Cir. 2022)',
      keyPoints: ['Consequential damages', 'Foreseeability', 'Commercial contracts']
    },
    {
      id: '3',
      title: 'Davis v. Miller (2021)',
      relevance: 82,
      summary: 'Established standards for proving material breach in service contracts.',
      citation: '789 F.3d 123 (5th Cir. 2021)',
      keyPoints: ['Material breach', 'Service contracts', 'Performance standards']
    }
  ];

  const mockStatutes = [
    {
      id: '1',
      title: 'Uniform Commercial Code § 2-314',
      description: 'Implied Warranty of Merchantability',
      relevance: 92,
      text: 'Unless excluded or modified, a warranty that the goods shall be merchantable is implied in a contract for their sale if the seller is a merchant with respect to goods of that kind.'
    },
    {
      id: '2',
      title: 'Uniform Commercial Code § 2-715',
      description: 'Buyer\'s Incidental and Consequential Damages',
      relevance: 88,
      text: 'Consequential damages resulting from the seller\'s breach include any loss resulting from general or particular requirements and needs of which the seller at the time of contracting had reason to know.'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setEvidenceFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setEvidenceFiles(prev => prev.filter((_, i) => i !== index));
  };

  const analyzeCase = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(`Based on the case details provided, this appears to be a contract dispute involving breach of warranty.

Key Legal Issues:
1. Material breach of contract
2. Implied warranty of merchantability
3. Calculation of damages

Recommended Legal Strategy:
1. Establish the existence of a valid contract
2. Prove material breach by defendant
3. Document damages with supporting evidence
4. Consider settlement negotiations

Relevant Precedents:
- Smith v. Jones supports your position on warranty claims
- Brown v. Wilson provides framework for damages calculation

Estimated Case Strength: Strong (85% confidence)
Recommended Next Steps: File motion for summary judgment on liability`);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">AI Judge Mode</h1>
                <p className="text-muted-foreground">Advanced case analysis and legal research</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              Professional Mode
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Case Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Case Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Case Facts & Circumstances</label>
                  <Textarea
                    placeholder="Enter detailed case facts, parties involved, timeline of events, and key circumstances..."
                    value={caseDetails}
                    onChange={(e) => setCaseDetails(e.target.value)}
                    className="min-h-[200px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Evidence Files</label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload contracts, documents, photos, or other evidence
                    </p>
                    <Input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Choose Files
                      </label>
                    </Button>
                  </div>

                  {evidenceFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {evidenceFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <span className="text-sm truncate">{file.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => removeFile(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  onClick={analyzeCase}
                  disabled={!caseDetails.trim() || isAnalyzing}
                  className="w-full"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing Case...
                    </>
                  ) : (
                    <>
                      <Gavel className="w-4 h-4 mr-2" />
                      Analyze Case
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Analysis Results Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* AI Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="w-5 h-5 mr-2" />
                  AI Analysis & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                {analysis ? (
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                      {analysis}
                    </pre>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Scale className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Enter case details and click &quot;Analyze Case&quot; to get AI-powered legal analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Legal Precedents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Relevant Precedents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-4">
                    {mockPrecedents.map((precedent) => (
                      <div key={precedent.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{precedent.title}</h4>
                          <Badge variant={precedent.relevance > 90 ? 'default' : 'secondary'}>
                            {precedent.relevance}% relevant
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{precedent.summary}</p>
                        <p className="text-xs font-mono text-muted-foreground mb-2">{precedent.citation}</p>
                        <div className="flex flex-wrap gap-1">
                          {precedent.keyPoints.map((point, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {point}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Relevant Statutes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Applicable Statutes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStatutes.map((statute) => (
                    <div key={statute.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{statute.title}</h4>
                        <Badge variant="secondary">
                          {statute.relevance}% relevant
                        </Badge>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">{statute.description}</div>
                      <p className="text-sm">{statute.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIJudgeWorkspace;